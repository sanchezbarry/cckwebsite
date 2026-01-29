import { useEffect, useState } from 'react';
import { SermonCategory } from '@/types';

const RSS_URL = 'https://anchor.fm/s/fe867604/podcast/rss';

// Proxy candidates like in sermon.js
const PROXY_CANDIDATES = [
  '', // direct attempt
  'https://api.allorigins.win/raw?url=',
  'https://api.allorigins.win/get?url=', // returns JSON {contents: "..."}
  'https://thingproxy.freeboard.io/fetch/',
  'https://cors.bridged.cc/'
];

interface RSSItem {
  title: string;
  pubDate: string;
  description: string;
  enclosure?: {
    url: string;
  };
  link?: string;
}

// Parse RSS XML and extract sermon data
function parseRSSToSermons(xmlText: string): SermonCategory[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'application/xml');
  
  if (doc.getElementsByTagName('parsererror').length > 0) {
    throw new Error('Failed to parse RSS XML');
  }

  const items = Array.from(doc.querySelectorAll('item')).slice(0, 40);
  
  return items.map((item, index) => {
    const title = item.querySelector('title')?.textContent || 'Untitled Sermon';
    const pubDate = item.querySelector('pubDate')?.textContent || new Date().toLocaleDateString();
    const description = item.querySelector('description')?.textContent || 'No description available';
    const enclosure = item.querySelector('enclosure');
    const audioUrl = enclosure?.getAttribute('url') || item.querySelector('link')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';

    // Extract image from iTunes image tag or channel image
    let imageUrl = 'https://images.unsplash.com/photo-1516321318423-f06f70674421?w=1200&h=675&fit=crop';
    
    // Try to get iTunes image
    const itunesImage = item.querySelector('itunes\\:image, image');
    if (itunesImage) {
      const imgHref = itunesImage.getAttribute('href');
      if (imgHref) {
        imageUrl = imgHref;
      }
    }
    
    // Fallback to channel image if item image not found
    if (imageUrl.includes('unsplash')) {
      const channelImage = doc.querySelector('channel > image > url');
      if (channelImage?.textContent) {
        imageUrl = channelImage.textContent;
      }
    }

    // Parse duration from description if available, otherwise default
    const durationMatch = description.match(/(\d+):(\d+)/);
    const duration = durationMatch ? `${durationMatch[1]}:${durationMatch[2]}` : '0:00';

    // Extract series and speaker from title if available
    const parts = title.split(' - ');
    const series = parts.length > 1 ? parts[0].trim() : 'Sunday Sermon';
    const speaker = parts.length > 2 ? parts[parts.length - 1].trim() : 'Pastor';

    return {
      id: `sermon-${index}`,
      title: parts.length > 1 ? parts[1].trim() : title,
      series,
      speaker,
      date: new Date(pubDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      duration,
      description: description.replace(/<[^>]*>/g, '').trim().substring(0, 150) + '...',
      imageUrl,
      type: index === 0 ? 'LATEST' : 'REGULAR' as const,
      categoryColor: index === 0 ? 'text-blue-600' : 'text-purple-600',
      audioUrl // Store audio URL for playback
    };
  });
}

export function useSermons() {
  const [sermons, setSermons] = useState<(SermonCategory & { audioUrl?: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSermons = async () => {
      setIsLoading(true);
      setError(null);
      
      let lastErr: Error | null = null;

      for (const proxy of PROXY_CANDIDATES) {
        try {
          const url = proxy ? `${proxy}${encodeURIComponent(RSS_URL)}` : RSS_URL;
          
          const response = await fetch(url, {
            headers: {
              'Accept': 'application/xml, application/rss+xml'
            }
          });

          if (!response.ok) {
            lastErr = new Error(`HTTP ${response.status}`);
            continue;
          }

          let xmlText: string;

          // Handle allorigins JSON wrapper
          if (proxy.includes('api.allorigins.win/get')) {
            const json = await response.json();
            if (json?.contents) {
              xmlText = json.contents;
            } else {
              lastErr = new Error('No contents from allorigins');
              continue;
            }
          } else {
            xmlText = await response.text();
          }

          // Validate XML response
          if (!xmlText || (!xmlText.includes('<rss') && !xmlText.includes('<feed') && !xmlText.includes('<item'))) {
            lastErr = new Error('Response is not valid RSS/XML');
            continue;
          }

          // Parse and set sermons
          const parsedSermons = parseRSSToSermons(xmlText);
          setSermons(parsedSermons);
          setIsLoading(false);
          return;
        } catch (err) {
          lastErr = err instanceof Error ? err : new Error(String(err));
          continue;
        }
      }

      // If we get here, all proxies failed
      setError(lastErr?.message || 'Could not load sermons from RSS feed');
      setIsLoading(false);
    };

    fetchSermons();
  }, []);

  return { sermons, isLoading, error };
}
"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LoginForm } from '@/components/Login';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';

const MUSICIANS_EMAIL = "copywritermemes@gmail.com";

// --- Transposer logic ---

const SHARP_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const FLAT_NOTES  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const FLAT_TO_SHARP: Record<string, string> = {
  Db: 'C#', Eb: 'D#', Fb: 'E', Gb: 'F#', Ab: 'G#', Bb: 'A#', Cb: 'B',
};

function transposeNote(note: string, semitones: number, useFlats: boolean): string {
  const sharp = FLAT_TO_SHARP[note] ?? note;
  const idx = SHARP_NOTES.indexOf(sharp);
  if (idx === -1) return note;
  const newIdx = ((idx + semitones) % 12 + 12) % 12;
  return useFlats ? FLAT_NOTES[newIdx] : SHARP_NOTES[newIdx];
}

// Matches a chord token: root + optional quality + optional slash bass
const CHORD_PATTERN = /^([A-G][#b]?)(m(?:aj)?7?|maj7?|M7?|7|9|11|13|dim7?|aug|sus[24]?|add9?)?(?:\/([A-G][#b]?))?$/;

function transposeToken(token: string, semitones: number, useFlats: boolean): string {
  const match = token.match(CHORD_PATTERN);
  if (!match) return token;
  const root = transposeNote(match[1], semitones, useFlats);
  const quality = match[2] ?? '';
  const bass = match[3] ? '/' + transposeNote(match[3], semitones, useFlats) : '';
  return root + quality + bass;
}

function isChordLine(line: string): boolean {
  const tokens = line.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return false;
  const chordCount = tokens.filter(t => CHORD_PATTERN.test(t)).length;
  return chordCount > 0 && chordCount / tokens.length >= 0.5;
}

function transposeText(text: string, semitones: number, useFlats: boolean): string {
  if (semitones === 0) return text;
  return text
    .split('\n')
    .map(line =>
      isChordLine(line)
        ? line.replace(/\S+/g, token => transposeToken(token, semitones, useFlats))
        : line
    )
    .join('\n');
}

// --- Transposer UI ---

function ChordTransposer() {
  const [input, setInput] = useState('');
  const [semitones, setSemitones] = useState(0);
  const [useFlats, setUseFlats] = useState(false);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => transposeText(input, semitones, useFlats), [input, semitones, useFlats]);

  const adjust = (delta: number) => setSemitones(prev => prev + delta);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-1">Chord Transposer</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Paste a chord sheet below. Chord lines are transposed automatically; lyrics are left unchanged.
      </p>

      {/* Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Chord sheet</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full h-52 p-3 font-mono text-sm border rounded-md resize-y bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={`Am  F  C  G\nWonderful grace of Jesus\nDm  Am\nGreater than all my sin`}
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-6 p-4 border rounded-md bg-muted/30">
        <span className="text-sm font-medium mr-1">Transpose:</span>

        {([-5, -2, -1] as const).map(n => (
          <Button key={n} variant="outline" size="sm" onClick={() => adjust(n)}>
            {n}
          </Button>
        ))}

        <div className="flex items-center justify-center min-w-18 px-3 py-1.5 bg-background border rounded-md font-mono font-bold text-base">
          {semitones > 0 ? '+' : ''}{semitones}
        </div>

        {([1, 2, 5] as const).map(n => (
          <Button key={n} variant="outline" size="sm" onClick={() => adjust(n)}>
            +{n}
          </Button>
        ))}

        <Button variant="ghost" size="sm" onClick={() => setSemitones(0)}>
          Reset
        </Button>

        <div className="flex gap-1 ml-auto">
          <Button
            variant={!useFlats ? 'default' : 'outline'}
            size="sm"
            onClick={() => setUseFlats(false)}
          >
            # Sharps
          </Button>
          <Button
            variant={useFlats ? 'default' : 'outline'}
            size="sm"
            onClick={() => setUseFlats(true)}
          >
            ♭ Flats
          </Button>
        </div>
      </div>

      {/* Output */}
      {input && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">
              Result{' '}
              {semitones !== 0 && (
                <span className="text-muted-foreground font-normal">
                  ({semitones > 0 ? '+' : ''}{semitones} semitone{Math.abs(semitones) !== 1 ? 's' : ''})
                </span>
              )}
            </label>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <pre className="w-full p-4 font-mono text-sm border rounded-md bg-muted overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {output}
          </pre>
        </div>
      )}
    </section>
  );
}

// --- Page ---

export default function Musicians() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
      );
      const { data } = await supabase.auth.getSession();
      const email = data?.session?.user?.email;

      if (email === MUSICIANS_EMAIL) {
        setIsAuthenticated(true);
      } else if (data?.session) {
        window.location.href = '/member';
        return;
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar alwaysShowBackground />
        <main className="grow flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar alwaysShowBackground />
        <main className="grow flex flex-col items-center w-full">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar alwaysShowBackground />
      <main className="mt-12 grow flex flex-col items-center w-full gap-8 py-10 px-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-1">Musicians</h1>
          <p className="text-muted-foreground mb-8">Tools for the worship team.</p>
        </div>
        <ChordTransposer />
      </main>
      <Footer />
    </div>
  );
}

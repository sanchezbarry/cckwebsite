"use client";
import React, { useEffect, useState } from "react";
import { getPDFUrl, deletePDF } from "@/lib/supabase-storage";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  refreshTrigger?: number;
  isAdmin?: boolean;
}

export function PDFViewer({ refreshTrigger, isAdmin = false }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadPDF();
  }, [refreshTrigger]);

  const loadPDF = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = await getPDFUrl();
      setPdfUrl(url);
    } catch (err) {
      setError("Failed to load PDF");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this PDF?")) {
      return;
    }

    setDeleting(true);
    try {
      await deletePDF();
      setPdfUrl(null);
      setError(null);
    } catch (err) {
      setError("Failed to delete PDF");
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="w-full max-w-4xl mx-auto p-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          No PDF uploaded yet. Upload one using the form above.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* PDF Viewer */}
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          className="w-full h-screen min-h-96"
          title="PDF Viewer"
        />
      </div>

      {/* Delete Button - Only for Admin */}
      {isAdmin && (
        <div className="mt-4 flex justify-end gap-2">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete PDF"}
          </Button>
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { uploadPDF } from "@/lib/supabase-storage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FileUploaderProps {
  onUploadSuccess?: () => void;
}

export function FileUploader({ onUploadSuccess }: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFileUpload = async (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    setError(null);
    setSuccess(false);

    if (uploadedFiles.length === 0) {
      return;
    }

    const file = uploadedFiles[0]; // Only take first file

    // Validate PDF
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      return;
    }

    setLoading(true);

    try {
      await uploadPDF(file);
      setSuccess(true);
      setFiles([]);
      setError(null);

      // Trigger refresh in parent component
      if (onUploadSuccess) {
        onUploadSuccess();
      }

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to upload PDF"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
        {/* <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="upload">
        <AccordionTrigger>CCK Admin</AccordionTrigger>
        <AccordionContent> */}
      <div className="min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
      </div>

      {/* Status Messages */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 rounded">
          PDF uploaded successfully!
        </div>
      )}
      {loading && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-200 rounded">
          Uploading...
        </div>
      )}
      {/* </AccordionContent>
      </AccordionItem>
      </Accordion> */}
    </div>
  );
}

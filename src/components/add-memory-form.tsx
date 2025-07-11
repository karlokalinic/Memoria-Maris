// components/add-memory-dialog.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isValidImageUrl } from "@/lib/utils";
import { X, Plus } from 'lucide-react';
import type { NewMemory } from "@/lib/types";

const memorySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long."),
  description: z.string().min(10, "Description must be at least 10 characters long."),
  imageUrl: z.string().refine(isValidImageUrl, {
    message: "Please enter a valid and secure (https) image URL ending with .jpg, .png, .gif, etc.",
  }),
  location: z.string().optional(),
  tags: z.array(z.object({ value: z.string().min(2, "Tag must be at least 2 characters.") })).optional(),
});

type MemoryFormValues = z.infer<typeof memorySchema>;

interface AddMemoryFormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onAddMemory: (data: NewMemory) => void;
}

export function AddMemoryForm({ isOpen, onOpenChange, onAddMemory }: AddMemoryFormProps) {
  const form = useForm<MemoryFormValues>({
    resolver: zodResolver(memorySchema),
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      location: "",
      tags: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tags"
  });

  const onSubmit = (data: MemoryFormValues) => {
    const finalData: NewMemory = {
      ...data,
      tags: data.tags ? data.tags.map(t => t.value) : [],
    };
    onAddMemory(finalData);
    form.reset();
    onOpenChange(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Add a New Memory</DialogTitle>
          <DialogDescription>
            Share a memory of marine life. Fill in the details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Majestic Humpback Whale" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the moment, the location, what you saw..."
                      className="resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://images.unsplash.com/..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Monterey Bay, California" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div>
              <FormLabel>Tags (Optional)</FormLabel>
              <FormDescription className="text-xs mb-2">Add tags to categorize your memory.</FormDescription>
              {fields.map((field, index) => (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`tags.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center gap-2">
                          <Input {...field} placeholder="e.g., diving" />
                          <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ value: "" })}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Tag
              </Button>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Saving..." : "Save Memory"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

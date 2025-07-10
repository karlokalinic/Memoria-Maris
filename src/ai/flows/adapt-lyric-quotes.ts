'use server';
/**
 * @fileOverview An AI agent that adapts lyric quotes based on user viewing history.
 *
 * - adaptLyricQuote - A function that adapts a lyric quote for a given character.
 * - AdaptLyricQuoteInput - The input type for the adaptLyricQuote function.
 * - AdaptLyricQuoteOutput - The return type for the adaptLyricQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptLyricQuoteInputSchema = z.object({
  characterName: z.string().describe('The name of the character.'),
  originalQuote: z.string().describe('The original lyric quote of the character.'),
  userViewingHistory: z.string().describe('The viewing history of the user.'),
});
export type AdaptLyricQuoteInput = z.infer<typeof AdaptLyricQuoteInputSchema>;

const AdaptLyricQuoteOutputSchema = z.object({
  adaptedQuote: z.string().describe('The adapted lyric quote.'),
});
export type AdaptLyricQuoteOutput = z.infer<typeof AdaptLyricQuoteOutputSchema>;

export async function adaptLyricQuote(input: AdaptLyricQuoteInput): Promise<AdaptLyricQuoteOutput> {
  return adaptLyricQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptLyricQuotePrompt',
  input: {schema: AdaptLyricQuoteInputSchema},
  output: {schema: AdaptLyricQuoteOutputSchema},
  prompt: `You are an expert lyric adapter. You will subtly alter a character's lyric quote based on the user's viewing history to create a personalized experience.  The adapted quote should maintain the original meaning and tone, but reflect the themes or elements the user has engaged with in their viewing history.

Character Name: {{{characterName}}}
Original Quote: {{{originalQuote}}}
User Viewing History: {{{userViewingHistory}}}

Adapted Quote: `,
});

const adaptLyricQuoteFlow = ai.defineFlow(
  {
    name: 'adaptLyricQuoteFlow',
    inputSchema: AdaptLyricQuoteInputSchema,
    outputSchema: AdaptLyricQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

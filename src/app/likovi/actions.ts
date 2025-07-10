'use server';

import { adaptLyricQuote, type AdaptLyricQuoteInput } from '@/ai/flows/adapt-lyric-quotes';

export async function getAdaptedQuote(input: AdaptLyricQuoteInput) {
  try {
    const result = await adaptLyricQuote(input);
    return { adaptedQuote: result.adaptedQuote };
  } catch (error) {
    console.error('Error adapting quote:', error);
    // In a real app, you might want to log this error to a monitoring service
    return { error: 'Došlo je do greške prilikom prilagodbe citata.' };
  }
}

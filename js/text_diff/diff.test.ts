import { test } from "bun:test";
import { diffSentences, diffWords } from "diff";
import { diff_match_patch } from "diff-match-patch";

const text1 =
  "The sun shimmered brightly in the azure sky, casting a warm glow over the tranquil landscape. Birds chirped cheerfully amidst the rustling leaves, adding to the symphony of nature. A gentle breeze danced through the air, carrying the scent of blooming flowers. It was a perfect day for a leisurely stroll in the park, with the promise of serenity and relaxation.";
const text2 =
  "The sun shimmered brightly in the azure sky, casting a warm glow over the serene landscape. Birds chirped cheerfully amidst the rustling leaves, adding to the melody of nature. A gentle breeze danced through the air, carrying the fragrance of blossoming flowers. It was an ideal day for a leisurely walk in the park, with the prospect of tranquility and calmness.";

test("diffs analysis", () => {
  const sentenceDiffs = diffSentences(text1, text2);
  const wordDiffs = diffWords(text1, text2);

  const differ = new diff_match_patch();
  const diff_main = differ.diff_main(text1, text2);
  const diff_cleanup = differ.diff_main(text1, text2);
  differ.diff_cleanupSemantic(diff_cleanup);

  const patch = differ.patch_make(text1, text2);
  const patchText = differ.patch_toText(patch);

  const strategies = [
    strategy("sentenceDiffs", sentenceDiffs, "diff"),
    strategy("wordDiffs", wordDiffs, "diff"),

    strategy("diff_main", diff_main, "diff_match_patch"),
    strategy("cleanupSemantic", diff_cleanup, "diff_match_patch"),
    strategy("patch", patch, "diff_match_patch"),
    strategy("patchText", patchText, "diff_match_patch"),
  ].sort((a, b) => a.size - b.size);

  console.table(strategies);
  strategies.forEach(({ name, size }) => {
    console.log(name, ",", size);
  });
});

function strategy(name: string, diffs: any, lib: string) {
  const string = diffs instanceof String ? diffs : JSON.stringify(diffs);
  return {
    name: lib + " - " + name,
    size: string.length,
    diffs,
  };
}

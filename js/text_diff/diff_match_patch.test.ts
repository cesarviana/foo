import { expect, test } from "bun:test";
import { diff_match_patch, patch_obj } from "diff-match-patch";

const differ = new diff_match_patch();

test("patchtext", () => {
  const text1 = `The moon shimmered brightly in the azure sky, casting a warm glow over the tranquil landscape. 
    Birds chirped cheerfully amidst the rustling leaves, adding to the symphony of nature. 
    A gentle breeze danced through the air, carrying the scent of blooming flowers. 
    It was a perfect day for a leisurely stroll in the park, with the promise of serenity and relaxation. 
    A monkey dancing. A text that is the same is here.`;
  const text2 = `The sun shimmered brightly in the azure sky, casting a warm glow over the tranquil landscape. 
    Birds chirped cheerfully amidst the rustling leaves, adding to the symphony of nature. 
    A gentle breeze danced through the air, carrying the scent of blooming flowers. 
    It was a perfect day for a leisurely stroll in the park, with the promise of serenity and relaxation. 
    Children excitedly pointed at colorful dinosaur skeletons, while families gathered around interactive displays. 
    A monkey climbing. A text that is the same is here.`;

  const diffs = differ.diff_main(text1, text2);
  differ.diff_cleanupSemantic(diffs);
  const patches = differ.patch_make(diffs);
  const patchText = differ.patch_toText(patches);
  expect(differ.patch_fromText(patchText)).toEqual(patches);
  console.log(patches);
});

test("patch using diff", () => {
  const text1 =
    "The local museum bustled with activity. Children excitedly pointed at colorful dinosaur skeletons, while families gathered around interactive displays. I followed a guided tour led by a passionate volunteer, her voice brimming with enthusiasm as she explained the history of local inventions. Upstairs, a temporary exhibit showcased modern art, provoking smiles and thoughtful frowns from visitors. The museum felt more like a vibrant community center than a stuffy repository. It was a place to learn, play, and spark curiosity in people of all ages.";
  const text2 =
    "The grand museum loomed before me, its imposing facade adorned with intricate carvings depicting mythical creatures. Inside, a hushed reverence filled the air as I wandered through vast halls lined with priceless artifacts. Gleaming marble statues stood frozen in time, their expressions capturing emotions from serenity to anguish. Every corner held a treasure – ancient pottery, ornate jewelry, and mummified remains preserved for millennia. The sheer volume of history was overwhelming, a testament to the ingenuity and artistry of civilizations long gone.";
  const diffs = differ.diff_main(text1, text2);
  differ.diff_cleanupSemantic(diffs);
  const patch = differ.patch_make(diffs);
  expect(patch).toBeArray();
  const patchText = differ.patch_toText(patch);
  expect(differ.patch_fromText(patchText)).toEqual(patch);
  const html = differ.diff_prettyHtml(diffs);
  console.log(html);
});

test("cleanup", () => {
  const diffs = differ.diff_main("Banana", "Abacate");
  differ.diff_cleanupSemantic(diffs);
  expect(diffs).toEqual([
    [-1, "Banana"],
    [1, "Abacate"],
  ]);

  const html = differ.diff_prettyHtml(diffs);
  expect(html).toBeString();
});

test("diff_main", () => {
  const diffs = differ.diff_main("Abacate", "Abacate é bom");
  differ.diff_cleanupSemantic(diffs);
  expect(diffs).toEqual([
    [0, "Abacate"],
    [1, " é bom"],
  ]);
});

test("diff_main single char", () => {
  const diff = differ.diff_main("a", "b");
  expect(diff).toEqual([
    [-1, "a"],
    [1, "b"],
  ]);
});

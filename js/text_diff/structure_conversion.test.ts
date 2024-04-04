import { test, expect } from "bun:test";
import { diff_match_patch } from "diff-match-patch";

const file = Bun.file("js/text_diff/diffs_data.json");

test("convert diff formats", async () => {
  const diffData = await file.json();

  const versions = diffData.map(
    (diffs: [{ value: string; action: string }]) => {
      return diffs
        .filter((diff) => {
          return ["same", "added"].includes(diff.action);
        })
        .map((change) => change.value)
        .join();
    }
  );

  console.log(versions);

  const differ = new diff_match_patch();

  const patches = versions.map((version: string, i: number) => {
    let text1 = versions[i - 1] ?? "";
    let text2 = version;

    const diffs = differ.diff_main(text1, text2);
    differ.diff_cleanupSemantic(diffs);
    const patch = differ.patch_make(diffs);
    const patchText = differ.patch_toText(patch);
    return patchText;
  });

  console.log(patches);

  let text = "";
  const recreatedVersions: string[] = [];
  patches.forEach((patchText: string) => {
    const patch = differ.patch_fromText(patchText);
    const [result] = differ.patch_apply(patch, text);
    text = result;
    recreatedVersions.push(text);
  });

  expect(recreatedVersions).toEqual(versions);

  const htmls = [];

  recreatedVersions.forEach((version, i) => {
    const text1 = recreatedVersions[i - 1] ?? "";
    const text2 = version;
    const diffs = differ.diff_main(text1, text2);
    differ.diff_cleanupSemantic(diffs);

    const html = differ.diff_prettyHtml(diffs);
    htmls.push(html);
  });

  const htmlFile = Bun.file("js/text_diff/diff_output.html");
  const writer = htmlFile.writer();

  writer.write("<html><head><title>Test</title></head><body>");


  htmls.forEach((html) => {
    writer.write('<div style="padding: 10px; border: 1px solid black">')
    writer.write(html)
    writer.write('</div>')
  });

  writer.write("</body></html>");

  writer.flush();
  writer.end();

  console.log(htmls);

  const currentStorageSize = JSON.stringify(diffData).length;
  console.log("current storage: ", currentStorageSize);
  const patchStorageSize = JSON.stringify(patches).length;
  console.log("patch storage: ", patchStorageSize);
  console.log("", patchStorageSize / currentStorageSize);
});

/*

db.getCollection("questionnaireresponse").find({
  contentChangeHistory: { $exists: true }
}, {
  contentChangeHistory: 1
})

db.questionnaireresponse.aggregate([
  
  {
      $match: {
          _id: ObjectId('63ef7d4d8fa9dd64eedf4754')
      }
  },
  {
      $project: {
          contentChangeHistory: 1
      }   
  },
  {
      $unwind: '$contentChangeHistory'
  },
  {
      $replaceRoot: {
          newRoot: '$contentChangeHistory'
      }
  },
  {
      $match: {
          actionType: 'ADD_EXPLANATION'
      }
  },
  {
      $sort: {
          updatedAt: 1
      }  
  },
  
])

*/

import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/routes");

const migrations = [
  ["Cancellation-Policy.tsx", "cancellation-policy.tsx", "/Cancellation-Policy", "/cancellation-policy"],
  ["Payment-Policy.tsx", "payment-policy.tsx", "/Payment-Policy", "/payment-policy"],
  ["FAQs.tsx", "faqs.tsx", "/FAQs", "/faqs"],
  ["Size-Guide.tsx", "size-guide.tsx", "/Size-Guide", "/size-guide"],
  ["Track-Order.tsx", "track-order.tsx", "/Track-Order", "/track-order"],
  ["Bulk-Order.tsx", "bulk-order.tsx", "/Bulk-Order", "/bulk-order"],
];

for (const [oldName, newName, oldPath, newPath] of migrations) {
  const oldFile = path.join(dir, oldName);
  const newFile = path.join(dir, newName);
  const tmpFile = path.join(dir, `_tmp_${newName}`);

  if (!fs.existsSync(oldFile)) {
    console.log("skip missing", oldName);
    continue;
  }

  let content = fs.readFileSync(oldFile, "utf8");
  content = content.replace(
    `createFileRoute("${oldPath}")`,
    `createFileRoute("${newPath}")`,
  );

  fs.writeFileSync(oldFile, content);
  fs.renameSync(oldFile, tmpFile);
  if (fs.existsSync(newFile)) fs.unlinkSync(newFile);
  fs.renameSync(tmpFile, newFile);

  console.log("ok", oldName, "->", newName);
}

import { BlockConfiguration, BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import React = require("react");

type TestBlockAttributes = {
  text: string;
};
export const TestBlockConfig: BlockConfiguration<TestBlockAttributes> = {
  attributes: {
    text: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },
  title: "Basic Example",
  icon: "editor-paragraph",
  category: "layout",
  keywords: ["test", "てす"],
  styles: [
    {
      // .is-style-defaultが付与される
      name: "default",
      label: "角丸",
      isDefault: true,
    },
    {
      // .is-style-shadow
      name: "shadow",
      label: "影付き",
    },
  ],
  edit: ({
    attributes,
    setAttributes,
  }: BlockEditProps<TestBlockAttributes>) => {
    const handleChange = (s: string) => {
      setAttributes({ text: s });
    };
    return (
      <RichText tagName="p" value={attributes.text} onChange={handleChange} />
    );
  },
  save: ({ attributes }) => <p>{attributes.text}</p>,
};

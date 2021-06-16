import { registerBlockType } from "@wordpress/blocks";
import { TestBlockConfig } from "./TestBlock";

registerBlockType("takasing/basic-paragraph-custom-block", TestBlockConfig);

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { Scripture } from "./scripture";
import { Callout } from "./callout";
import { BSPCTA, BookCTA, NewsletterCTA } from "./cta-blocks";

const components: MDXRemoteProps["components"] = {
  Scripture,
  Callout,
  BSPCTA,
  BookCTA,
  NewsletterCTA,
};

export function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}

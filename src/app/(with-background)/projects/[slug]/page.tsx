import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { createProjectSchema } from "@/shared";
import { ProjectDetail as ProjectDetailComp } from "@/widgets/projects";

import { PROJECTS_ITEMS } from "@/shared/config/project/projects-items.config";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS_ITEMS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.seo.title,
    description: project.seo.description,

    keywords: project.seo.keywords,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [project.seo.ogImage ?? project.seo.image],
    },

    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
      images: [project.seo.twitterImage ?? project.seo.image],
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  const project = PROJECTS_ITEMS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailComp project={project}/>

      <Script
        id={`project-schema-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createProjectSchema(project)),
        }}
      />
    </>
  );
}

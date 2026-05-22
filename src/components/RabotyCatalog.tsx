"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  workFilters,
  workProjects,
  type WorkFilter,
  type WorkProject,
} from "@/data/raboty";

function ProjectCard({ project }: { project: WorkProject }) {
  const href = project.href ?? null;
  const content = (
    <>
      <div className="relative aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {project.detail ? (
          <span className="absolute left-3 top-3 rounded-sm bg-grc-orange px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Разбор
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider text-grc-orange"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-sm font-semibold leading-snug text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-grc-orange-light">
          {project.client}
        </p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-grc-muted">
          {project.result}
        </p>
        {href ? (
          <span className="mt-3 text-[10px] font-bold uppercase tracking-wide text-grc-orange">
            Подробнее →
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-col overflow-hidden rounded-sm border border-grc-border bg-grc-steel transition hover:border-grc-orange/50"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-grc-border bg-grc-steel">
      {content}
    </article>
  );
}

export function RabotyCatalog() {
  const [filter, setFilter] = useState<WorkFilter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return workProjects;
    return workProjects.filter((p) => p.filters.includes(filter));
  }, [filter]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {workFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
              filter === f.id
                ? "border-grc-orange bg-grc-orange text-white"
                : "border-grc-border bg-grc-graphite text-grc-muted hover:border-grc-muted hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-grc-muted">
        Показано: {filtered.length} из {workProjects.length} проектов
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}

import { ProjectCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Markdown from "react-markdown";
import { useTranslations } from "next-intl";

const BLUR_FADE_DELAY = 0.04;

interface ProjectLink {
  readonly icon: string;
  readonly title: string;
  readonly href: string;
}

interface IProject {
  readonly title: string;
  readonly dates: string;
  readonly location: string;
  readonly description: string;
  readonly image?: string;
  readonly links: ProjectLink[];
}

export default function Page() {
  const t = useTranslations();

  const personal = {
    name: t("personal.name"),
    initials: t("personal.initials"),
    avatarUrl: t("personal.avatarUrl"),
    description: t("personal.description"),
    summary: t("personal.summary"),
  };

  const work = Array.from({ length: t.raw("work").length }, (_, i) => ({
    company: t(`work.${i}.company`),
    href: t(`work.${i}.href`),
    badges: t.raw(`work.${i}.badges`) || [],
    location: t(`work.${i}.location`),
    title: t(`work.${i}.title`),
    logoUrl: t.raw(`work.${i}.logoUrl`),
    start: t(`work.${i}.start`),
    end: t(`work.${i}.end`),
    description: t(`work.${i}.description`),
  }));

  const education = Array.from({ length: t.raw("education").length }, (_, i) => ({
    school: t(`education.${i}.school`),
    href: t(`education.${i}.href`),
    degree: t(`education.${i}.degree`),
    logoUrl: t.raw(`education.${i}.logoUrl`),
    start: t(`education.${i}.start`),
    end: t(`education.${i}.end`),
  }));

  const skills: string[] = t.raw("skills");

  const projects: IProject[] = Array.from({ length: t.raw("projects").length }, (_, i) => ({
    title: t(`projects.${i}.title`),
    dates: t(`projects.${i}.dates`),
    location: t(`projects.${i}.location`),
    description: t(`projects.${i}.description`),
    image: t.raw(`projects.${i}.image`),
    links: t.raw(`projects.${i}.links`),
  }));

  const contact = {
    email: t("contact.email"),
    social: {
      X: {
        url: t("contact.social.X.url"),
      },
    },
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-md:pb-12">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={t("hero.greeting", { name: personal.name.split(" ")[0] })}
              />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={personal.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={personal.name} src={personal.avatarUrl} />
                <AvatarFallback>{personal.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">{t("ui.aboutTitle")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{personal.summary}</Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t("ui.experienceTitle")}</h2>
          </BlurFade>
          {work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end || t("common.present")}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t("ui.educationTitle")}</h2>
          </BlurFade>
          {education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t("ui.skillsTitle")}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t("ui.projectsBadge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("ui.projectsTitle")}</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{t("ui.projectsDescription")}</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {projects.map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{t("ui.contactBadge")}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("ui.contactTitle")}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("ui.contactDescription")}{" "}
                <Link href={contact.social.X.url} className="text-blue-500 hover:underline">
                  {t("ui.contactLinkText")}
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

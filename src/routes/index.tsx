import { Button } from "@/components/Layout/Button";
import { Card } from "@/components/Layout/Card";
import { DataList } from "@/components/Layout/DataList";
import { ContactIcon } from "@/components/Layout/Icons/ContactIcon";
import { DownloadIcon } from "@/components/Layout/Icons/DownloadIcon";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Path } from "@/components/Layout/Path";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-2">
        <Path />
        <div className="flex text-8xl font-bold font-display gap-2">
          <span className="flex-2 text-offwhite">AMAURI JUNIOR</span>
          <span className="flex-4 text-primary">BECHTOLD</span>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-8">
        <div className="w-20 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">ENGENHEIRO DE SOFTWARE</span>
      </div>
      <div className="flex gap-8 mt-8">
        <Card.Root className="flex flex-col gap-4 flex-3">
          <Card.Header>SYSTEM_BIO_README.EXE</Card.Header>
          <span className="text-offwhite">
            I'm a{" "}
            <span className="text-primary font-bold">
              Senior Software Engineer
            </span>{" "}
            with strong experience building scalable web applications,
            specializing in{" "}
            <span className="text-primary">TypeScript, React, and Node.js</span>
            .
          </span>
          <span className="text-offwhite">
            While my background includes deep expertise in{" "}
            <span className="text-primary">frontend architecture</span>, I also
            work extensively on the backend, designing APIs, services, and
            tooling that support modern full-stack applications...
          </span>
          <div className="flex items-center gap-4 mt-8">
            <Button onClick={() => null} leadingIcon={<DownloadIcon />}>
              RESUME.PDF
            </Button>
            <Button
              onClick={() => null}
              leadingIcon={<ContactIcon />}
              variant={"outline"}
            >
              CONTACT
            </Button>
          </div>
        </Card.Root>
        <Card.Root className="flex-1 min-h-0">
          <Card.Header>USER_METRICS</Card.Header>
          <DataList.Root>
            <DataList.Item>
              <DataList.Label>EXPERIENCE</DataList.Label>
              <DataList.Value>10+ YEARS</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>LOCATION</DataList.Label>
              <DataList.Value>BRAZIL//SC</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>ROLE</DataList.Label>
              <DataList.Value>SR_FULL_STACK_ENG</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card.Root>
      </div>
      <div className="flex flex-col gap-2">
        <Path />
        <div className="flex text-8xl font-bold font-display gap-2">
          <span className="flex-2 text-offwhite">AMAURI JUNIOR</span>
          <span className="flex-4 text-primary">BECHTOLD</span>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-8">
        <div className="w-20 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">ENGENHEIRO DE SOFTWARE</span>
      </div>
      <div className="flex gap-8 mt-8">
        <Card.Root className="flex flex-col gap-4 flex-3">
          <Card.Header>SYSTEM_BIO_README.EXE</Card.Header>
          <span className="text-offwhite">
            I'm a{" "}
            <span className="text-primary font-bold">
              Senior Software Engineer
            </span>{" "}
            with strong experience building scalable web applications,
            specializing in{" "}
            <span className="text-primary">TypeScript, React, and Node.js</span>
            .
          </span>
          <span className="text-offwhite">
            While my background includes deep expertise in{" "}
            <span className="text-primary">frontend architecture</span>, I also
            work extensively on the backend, designing APIs, services, and
            tooling that support modern full-stack applications...
          </span>
          <div className="flex items-center gap-4 mt-8">
            <Button onClick={() => null} leadingIcon={<DownloadIcon />}>
              RESUME.PDF
            </Button>
            <Button
              onClick={() => null}
              leadingIcon={<ContactIcon />}
              variant={"outline"}
            >
              CONTACT
            </Button>
          </div>
        </Card.Root>
        <Card.Root className="flex-1 min-h-0">
          <Card.Header>USER_METRICS</Card.Header>
          <DataList.Root>
            <DataList.Item>
              <DataList.Label>EXPERIENCE</DataList.Label>
              <DataList.Value>10+ YEARS</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>LOCATION</DataList.Label>
              <DataList.Value>BRAZIL//SC</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>ROLE</DataList.Label>
              <DataList.Value>SR_FULL_STACK_ENG</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card.Root>
      </div>
      <div className="flex flex-col gap-2">
        <Path />
        <div className="flex text-8xl font-bold font-display gap-2">
          <span className="flex-2 text-offwhite">AMAURI JUNIOR</span>
          <span className="flex-4 text-primary">BECHTOLD</span>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-8">
        <div className="w-20 h-1.5 bg-primary" />
        <span className="tracking-huge text-2xl">ENGENHEIRO DE SOFTWARE</span>
      </div>
      <div className="flex gap-8 mt-8">
        <Card.Root className="flex flex-col gap-4 flex-3">
          <Card.Header>SYSTEM_BIO_README.EXE</Card.Header>
          <span className="text-offwhite">
            I'm a{" "}
            <span className="text-primary font-bold">
              Senior Software Engineer
            </span>{" "}
            with strong experience building scalable web applications,
            specializing in{" "}
            <span className="text-primary">TypeScript, React, and Node.js</span>
            .
          </span>
          <span className="text-offwhite">
            While my background includes deep expertise in{" "}
            <span className="text-primary">frontend architecture</span>, I also
            work extensively on the backend, designing APIs, services, and
            tooling that support modern full-stack applications...
          </span>
          <div className="flex items-center gap-4 mt-8">
            <Button onClick={() => null} leadingIcon={<DownloadIcon />}>
              RESUME.PDF
            </Button>
            <Button
              onClick={() => null}
              leadingIcon={<ContactIcon />}
              variant={"outline"}
            >
              CONTACT
            </Button>
          </div>
        </Card.Root>
        <Card.Root className="flex-1 min-h-0">
          <Card.Header>USER_METRICS</Card.Header>
          <DataList.Root>
            <DataList.Item>
              <DataList.Label>EXPERIENCE</DataList.Label>
              <DataList.Value>10+ YEARS</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>LOCATION</DataList.Label>
              <DataList.Value>BRAZIL//SC</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>ROLE</DataList.Label>
              <DataList.Value>SR_FULL_STACK_ENG</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card.Root>
      </div>
    </MainLayout>
  );
}

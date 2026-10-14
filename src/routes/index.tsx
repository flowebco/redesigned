import { createFileRoute } from "@tanstack/react-router";
import { PulpSite } from "@/components/pulp-site";

export const Route = createFileRoute("/")({ component: PulpSite });

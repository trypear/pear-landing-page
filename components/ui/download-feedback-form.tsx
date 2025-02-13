import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  userRoles,
  experienceLevels,
  primaryUses,
  DownloadFeedback,
} from "@/types/download-feedback";

interface DownloadFeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: DownloadFeedback) => void;
}

export default function DownloadFeedbackForm({
  isOpen,
  onClose,
  onSubmit,
}: DownloadFeedbackFormProps) {
  const [role, setRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [primaryUse, setPrimaryUse] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = () => {
    onSubmit({
      role,
      experience_level: experienceLevel,
      primary_use: primaryUse,
      project_description: projectDescription,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Download Started...
            <br />
            While You Wait, Mind Telling Us About Your Next Project?
          </DialogTitle>
          <DialogDescription>
            We&apos;re excited to see what you&apos;ll make with PearAI. Share
            your vision with us and help us improve the product. And remember to
            make what excites!
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              What best describes your role?
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm"
            >
              <option value="" disabled>
                Select a role...
              </option>
              {userRoles.map((r) => (
                <option key={r} value={r} className="dark:text-slate-800">
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Your experience level of coding?
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm"
            >
              <option value="" disabled>
                Select experience level...
              </option>
              {experienceLevels.map((level) => (
                <option
                  key={level}
                  value={level}
                  className="dark:text-slate-800"
                >
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Primary use case for PearAI?
            </label>
            <select
              value={primaryUse}
              onChange={(e) => setPrimaryUse(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm"
            >
              <option value="" disabled>
                Select primary use...
              </option>
              {primaryUses.map((use) => (
                <option key={use} value={use} className="dark:text-slate-800">
                  {use}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              What are you planning to make with PearAI, and why are you making
              it?
            </label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm"
              placeholder="Tell us about the projects you're working on!"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={
              !role ||
              !experienceLevel ||
              !primaryUse ||
              !projectDescription.trim()
            }
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

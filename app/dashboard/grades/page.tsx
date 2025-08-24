"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GradePage() {
  const [selectedClass, setSelectedClass] = useState("");
  const [section, setSection] = useState("");
  const [alias, setAlias] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      class: selectedClass,
      section,
      alias,
    };

    console.log("Section Added:", data);
    alert(`Section "${section}" added for Class "${selectedClass}"`);
    setSection("");
    setAlias("");
  };

  return (
    <Card className="w-full rounded-xl border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Add Section</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Select Class */}
            <div className="flex flex-col">
              <Label className="mb-2">Select Class</Label>
              <Select onValueChange={(value) => setSelectedClass(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="I">I</SelectItem>
                  <SelectItem value="II">II</SelectItem>
                  <SelectItem value="III">III</SelectItem>
                  <SelectItem value="IV">IV</SelectItem>
                  <SelectItem value="V">V</SelectItem>
                  <SelectItem value="VI">VI</SelectItem>
                  <SelectItem value="VII">VII</SelectItem>
                  <SelectItem value="VIII">VIII</SelectItem>
                  <SelectItem value="IX">IX</SelectItem>
                  <SelectItem value="X">X</SelectItem>
                  <SelectItem value="X">XI</SelectItem>
                  <SelectItem value="X">XII</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Section */}
            <div className="flex flex-col">
              <Label className="mb-2">Section to be generated</Label>
              <Input
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="e.g. A"
                required
              />
            </div>

            {/* Section Alias */}
            <div className="flex flex-col">
              <Label className="mb-2">Section Alias (if any)</Label>
              <Input
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="e.g. Alpha"
              />
            </div>
          </div>

          <div className="flex justify-start mt-2">
            <Button type="submit" className="bg-blue-950 hover:bg-blue-950">
              + Add Section
            </Button>
          </div>
        </form>

        {/* Info Text */}
        <p className="text-xs text-gray-500 mt-3">
          Alias — A substitute name for a section, normally used to refer to a particular section in school.
        </p>
      </CardContent>
    </Card>
  );
}

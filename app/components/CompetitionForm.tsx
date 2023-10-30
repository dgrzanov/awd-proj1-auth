// "use client";
import axios from "axios";
import React, { useState } from "react";

interface CompetitionFormData {
  competitionName: string;
  competitorList: string;
  scoringSystem: string;
}

const CompetitionForm: React.FC = () => {
  const [formData, setFormData] = useState<CompetitionFormData>({
    competitionName: "",
    competitorList: "",
    scoringSystem: "3/1/0",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ovdje možete izvršiti logiku za spremanje unesenih podataka
    console.log("Competition Name:", formData.competitionName);
    console.log("Competitor List:", formData.competitorList);
    console.log("Scoring System:", formData.scoringSystem);
    axios.post("api/competition/generate", formData);
  };

  return (
    <div>
      <h1 className="font-bold my-10">Enter competition information:</h1>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action={"api/competition/generate"}
        className="flex flex-col gap-5"
      >
        <div className="flex justify-between gap-3">
          <label>Competition Name:</label>
          <input
            type="text"
            name="competitionName"
            value={formData.competitionName}
            onChange={handleChange}
            className="bg-slate-600"
          />
        </div>
        <div className="flex justify-between gap-3">
          <label>Competitor List:</label>
          <textarea
            name="competitorList"
            value={formData.competitorList}
            onChange={handleChange}
            className="bg-slate-600"
          />
        </div>
        <div className="flex justify-between gap-3">
          <label>Scoring System:</label>
          <input
            type="text"
            name="scoringSystem"
            value={formData.scoringSystem}
            onChange={handleChange}
            className="bg-slate-600"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CompetitionForm;

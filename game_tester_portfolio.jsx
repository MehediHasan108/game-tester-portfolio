import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Bug } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <section className="max-w-4xl mx-auto text-center py-10">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Md Mahaadi
        </motion.h1>
        <p className="text-lg text-gray-400 mb-4">
          Game Tester · QA Tester · User Feedback Specialist
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            <Mail className="mr-2 w-4 h-4" /> your.email@example.com
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            <Linkedin className="mr-2 w-4 h-4" /> linkedin.com/in/yourprofile
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Game Testing</h2>
            <p className="text-gray-400">
              Experience testing PC and console games across genres. Focused on gameplay mechanics, balance, and user experience. Able to document issues and work with development teams for rapid fixes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">QA Testing</h2>
            <p className="text-gray-400">
              Skilled in manual and automated QA testing. Proficient with tools like JIRA, TestRail, and Bugzilla. Strong understanding of test planning, execution, and regression testing.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">User Feedback</h2>
            <p className="text-gray-400">
              Analyzed player behavior and delivered actionable insights to improve game design. Worked directly with user surveys, playtests, and live feedback tools.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Bug Reporting</h2>
            <p className="text-gray-400">
              Logged and tracked bugs in real-time during game sessions. Clear documentation with reproduction steps and severity analysis. Always aiming for quality and clarity.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 mt-10">
        <p>&copy; {new Date().getFullYear()} Md Mahaadi. All rights reserved.</p>
      </footer>
    </main>
  );
}

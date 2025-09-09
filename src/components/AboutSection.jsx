import { Briefcase, User, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-muted-foreground">
              At Havas, I served as the lead developer on 380+ personalized email campaigns for clients like Fitbit, Liberty Mutual, and Jornay, coding dynamic content with AMPscript and executing creative tests.
          </h3>
          <p className="text-muted-foreground">
              At Dentsu, I built integrated WordPress and Salesforce CloudPages for major nonprofit clients and supported CRM platform transitions. I served as the primary technical contact for clients and internal account teams.
          </p>
          <p className="text-muted-foreground">
              At Mission Wired, I streamlined email production by 75% and improved mobile conversions by 10%. I also supervised junior staff and led company-wide training on project management tools and best practices, which became part of the standard onboarding curriculum.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            {/*<a href="#contact" className="cosmic-button">*/}
            {/*  Get in Touch*/}
            {/*</a>*/}
            <a href="https://docs.google.com/document/d/1Raz8YPmrYASBm5wvMSxOeFKIiMxKidk5/edit?usp=sharing&ouid=115842286905385454027&rtpof=true&sd=true" className="cosmic-button px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300" target="_blank">
              Review My Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
              </div>
            </div>
          </div>


          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" /></div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">CRM Management</h4>
                <p className="text-muted-foreground">Managing customer data, streamlining sales workflows, and improving overall CRM usability.</p>
              </div>

            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" /></div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Cross-functional Collaboration</h4>
                <p className="text-muted-foreground">Working closely with designers, project managers, and account teams to deliver seamless user experiences and align features with business goals.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section >
  );
}
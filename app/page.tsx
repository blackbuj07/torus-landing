import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Outperforming NOVOS, Designed for You</h1>
        <p className="text-lg text-muted-foreground">
          TORUS isn’t just another longevity stack. We personalize every protocol using your real-world biology, aiming for energy, performance, and visible results.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">🔬 NOVOS Protocol</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><CheckCircle className="inline mr-2 text-green-500" />Targets 12 hallmarks of aging</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Mouse-model lifespan data</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Evidence-based ingredient stack</li>
              <li><CheckCircle className="inline mr-2 text-yellow-500" />Static monthly supplement pack</li>
              <li><CheckCircle className="inline mr-2 text-yellow-500" />No personalization or biomarker input</li>
              <li><CheckCircle className="inline mr-2 text-red-500" />No dynamic feedback loop or app</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">🚀 TORUS Protocol</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><CheckCircle className="inline mr-2 text-green-500" />Biomarker-driven personalization (methylation, blood, wearables)</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Live protocol optimization from biofeedback</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Visible results: skin, libido, cognition, energy</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Includes cutting-edge molecules (Urolithin A, Spermidine, Senolytics)</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Optimized dosing for your age + phenotype</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Weekly insights through dashboard & app</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <div className="text-center pt-8">
        <Button className="text-lg px-8 py-6 font-semibold">
          Join the Founding Cohort <ArrowRight className="ml-2" />
        </Button>
      </div>
      <form
        className="space-y-4 border-t pt-8 mt-8 max-w-md mx-auto"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
              name: formData.get('name'),
              email: formData.get('email'),
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (res.ok) {
            alert('Thanks! You’re in.');
            form.reset();
          } else {
            alert('Something went wrong.');
          }
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-xl"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}

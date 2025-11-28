import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-warm-beige p-4 text-center">
      <div className="mb-8 animate-bounce text-primary">
        <Coffee size={64} />
      </div>
      <h1 className="mb-4 font-serif text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
        Looks like we're out of beans!
      </h2>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        The page you're looking for has been filtered out or doesn't exist. 
        Let's get you back to the fresh brew.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
        <a href="/">Return to Home</a>
      </Button>
    </div>
  );
};

export default NotFound;

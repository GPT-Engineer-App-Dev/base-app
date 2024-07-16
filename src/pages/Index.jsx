import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
      <p className="text-xl mb-8">Start building your application here.</p>
      <Button onClick={() => navigate("/placeholder")}>Get Started</Button>
    </div>
  );
};

export default Index;
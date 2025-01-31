/* src/components/ProfileCard.js */
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Moon, Sun } from "lucide-react";

export function ProfileCard() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="absolute top-5 right-5 p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
      >
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-blue-500" />}
      </button>
      <Card className="w-96 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-xl">
        <CardHeader floated={false} className="h-80">
          <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}

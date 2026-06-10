import ThemeIcon from "@/components/icons/ThemeIcon";
import { useTheme } from "@/hooks/useTheme";

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <ThemeIcon variant="sun" />

      <button
        onClick={() => setIsDark((prev) => !prev)}
        aria-label="Toggle theme"
        type="button"
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${
          isDark ? "bg-primary" : "bg-grey-500"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <ThemeIcon variant="moon" />
    </div>
  );
}

export default ThemeToggle;

import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
      <span className="text-sm font-orbitron text-neon text-primary">
        {t('language.switch')}
      </span>
      <Switch
        checked={language === 'es'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-secondary data-[state=unchecked]:bg-primary/30"
      />
    </div>
  );
};

export default LanguageToggle;
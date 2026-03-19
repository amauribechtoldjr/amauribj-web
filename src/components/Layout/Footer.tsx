import { t } from "../../i18n";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
        <p>
          © {year} {profile.name}. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

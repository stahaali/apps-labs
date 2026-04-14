import EcommerceFeaturesSection from "@/components/EcommerceFeaturesSection/EcommerceFeaturesSection";
import EcommerceTechnologySuiteSection from "@/components/EcommerceTechnologySuiteSection/EcommerceTechnologySuiteSection";
import styles from "./EcommerceTechFeaturesShell.module.css";

/** Single gradient band for Technology suite + Features on /ecommerce-app-development */
export default function EcommerceTechFeaturesShell() {
  return (
    <div className={styles.shell}>
      <EcommerceTechnologySuiteSection />
      <EcommerceFeaturesSection />
    </div>
  );
}

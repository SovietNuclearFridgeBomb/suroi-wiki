import GenericLayoutFactory from "@/components/layouts/GenericLayoutFactory";
import MeleeSidebar from "@/components/sidebars/MeleeSidebar";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";

export default GenericLayoutFactory({
  items: Melees,
  Sidebar: MeleeSidebar
});

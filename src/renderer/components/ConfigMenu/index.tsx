import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
  animation,
} from 'react-contexify';
import { motion } from 'framer-motion';
import { IoIosSettings } from 'react-icons/io';

import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'menu-id';

const ConfigMenu: React.FC = () => {
  // 🔥 you can use this hook from everywhere. All you need is the menu id
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  function handleItemClick({ event, props, triggerEvent, data }: any) {
    console.log(event, props, triggerEvent, data);
  }

  // function displayMenu(e: any) {
  //   // put whatever custom logic you need
  //   // you can even decide to not display the Menu
  //   show(e);
  // }

  return (
    <div>
      <div onContextMenu={show}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="d-flex align-items-center"
        >
          <IoIosSettings className="icon-btn" size={20} color="#FFF" />
        </motion.div>
      </div>
      <Menu animation={animation.fade} id={MENU_ID}>
        <Item onClick={handleItemClick}>Item 1</Item>
        <Item onClick={handleItemClick}>Item 2</Item>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label="Submenu">
          <Item onClick={handleItemClick}>Sub Item 1</Item>
          <Item onClick={handleItemClick}>Sub Item 2</Item>
        </Submenu>
      </Menu>
    </div>
  );
};

export default ConfigMenu;

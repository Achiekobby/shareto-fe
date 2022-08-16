import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import PostCard from "../PostCard/PostCard";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Update your Details"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
      >
        <PostCard/>
      </Modal>
    </>
  );
}

export default ShareModal;

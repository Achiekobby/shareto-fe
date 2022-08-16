import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
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
        size='55%'
      >
        <form action="" className="info-form authForm">
          <h3>Your Info</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="first_name"
              placeholder="First Name"
            />
            <input
              type="text"
              className="infoInput"
              name="last_name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" className="infoInput" />
          </div>
          <div>
            <input type="text" name="works" placeholder='Works At' className="infoInput" />
          </div>
          <div>
          <input
              type="text"
              className="infoInput"
              name="lives_in"
              placeholder="Lives In"
            />
            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <input type="text" name="relationship_status" placeholder="Relationship Status" className="infoInput" />
          </div>
          <div>
            Profile Image
            <input type="file" name="profile_image"  />
            Cover Image
            <input type="file" name="cover_image" placeholder="Cover Image"/>
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;

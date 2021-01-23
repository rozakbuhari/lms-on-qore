import { Upload } from "antd";
import React from "react";
import useUser from "src/hooks/useUser";
import { PlusOutlined } from "@ant-design/icons";
import useUploadURL from "src/hooks/useUploadURL";
import { nanoid } from "nanoid";
import ImgCrop from "antd-img-crop";

const ProfilePicture: React.FC = () => {
  const { user, mutate } = useUser();
  const getUrl = useUploadURL();

  return (
    <div>
      <ImgCrop rotate>
        <Upload
          listType="picture-card"
          onChange={({ file }) => {
            (async () => {
              const [ext] = file.name.split(".").reverse();
              const fileName = `${nanoid()}.${ext}`;
              const url = await getUrl(fileName);

              fetch(url, {
                method: "PUT",
                headers: { "Content-Type": file.type },
                body: file.originFileObj,
              });

              const [pictureUrl] = url.split("?");

              await fetch(`/api/user/${user.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ picture: pictureUrl }),
              });

              mutate();
            })();
          }}
          showUploadList={false}
        >
          {user?.picture ? (
            <img className="p-2" src={user?.picture} alt={user?.name} />
          ) : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default ProfilePicture;

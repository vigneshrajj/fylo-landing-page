import AccessIcn from "../../images/icon-access-anywhere.svg";
import SecurityIcn from "../../images/icon-security.svg";
import CollaborationIcn from "../../images/icon-collaboration.svg";
import FileIcn from "../../images/icon-any-file.svg";
import ProductiveImg from "../../images/illustration-stay-productive.png";
import ArrowIcn from "../../images/icon-arrow.svg";

export default function features() {
  const featureList = [
    {
      id: 1,
      img: AccessIcn,
      heading: "Access your files, anywhere",
      content:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      id: 2,
      img: SecurityIcn,
      heading: "Security you can trust",
      content:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      id: 3,
      img: CollaborationIcn,
      heading: "Real-time collaboration",
      content:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      id: 4,
      img: FileIcn,
      heading: "Store any type of file",
      content:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ];
  return (
    <div className="features-container">
      {featureList.map((feature) => {
        return (
          <div className="feature-item-container">
            <img id={feature.id} src={feature.img} alt="features" />
            <h3>{feature.heading}</h3>
            <p>{feature.content}</p>
          </div>
        );
      })}
      <img
        className="productive-img"
        src={ProductiveImg}
        alt="stay productive"
      />
      <div className="productive-container">
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#">
          See how Fylo Works <img src={ArrowIcn} alt="Arrow icon" />
        </a>
      </div>
    </div>
  );
}

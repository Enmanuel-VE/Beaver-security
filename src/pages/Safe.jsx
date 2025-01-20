import CreateButtonItem from "../components/CreateButtonItem";

import SafeItem from "../components/SafeItems";

const Safe = () => {
  return (
    <div className="my-5">
      <SafeItem siteName="Nombre del sitio" url="url del sitio" />
      <CreateButtonItem />
    </div>
  );
};

export default Safe;

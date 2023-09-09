import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex space-x-3">
        <img src={data.avatar_url} alt="" width={200} className="" />
        <h4 className="text-2xl">Name: {data.name}</h4> <br />
      </div>
      <h4 className="text-2xls">Github Repo: {data.public_repos}</h4>
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Amit09Dev");
  return response.json();
};

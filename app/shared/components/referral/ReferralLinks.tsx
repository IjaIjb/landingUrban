import { useState } from "react";
import { Copy } from "lucide-react";
import { User } from "@/providers/referral..providers";
import { IUserReferred } from "@/types/referred.type";

const ReferralLinks = ({
  dataLink,
  user,
}: {
  dataLink: IUserReferred[];
  user: User;
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopied(link);
    setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2 pt-3">
        {/* Fleet Referral Link */}
        <div className="grid gap-2">
          <span className="text-base text-primary font-semibold">
            Fleet Referral Link:
          </span>
          <div className="bg-primary/55 py-2 px-5 text-white flex items-center justify-between rounded-md">
            <span className="truncate">{`https://fleet.urban.ng/register?referral=${user.username}`}</span>
            <Copy
              className="w-5 h-5 cursor-pointer text-white hover:opacity-75"
              onClick={() =>
                handleCopy(
                  `https://fleet.urban.ng/register?referral=${user.username}`
                )
              }
            />
          </div>
          {copied ===
            `https://fleet.urban.ng/register?referral=${user.username}` && (
            <span className="text-green-500 text-sm">Copied!</span>
          )}
        </div>

        {/* Park Referral Link */}
        <div className="grid gap-2">
          <span className="text-base text-primary font-semibold">
            Park Referral Link:
          </span>
          <div className="bg-primary/55 py-2 px-5 text-white flex items-center justify-between rounded-md">
            <span className="truncate">{`https://park.urban.ng/register?referral=${user.username}`}</span>
            <Copy
              className="w-5 h-5 cursor-pointer text-white hover:opacity-75"
              onClick={() =>
                handleCopy(
                  `https://park.urban.ng/register?referral=${user.username}`
                )
              }
            />
          </div>
          {copied ===
            `https://park.urban.ng/register?referral=${user.username}` && (
            <span className="text-green-500 text-sm">Copied!</span>
          )}
        </div>
      </div>
      {user && dataLink?.length === 0 && (
        <div className=" h-full pt-8 w-full flex items-center justify-center">
          <span className=" text-base text-primary">
            No referred user listed
          </span>
        </div>
      )}
      {dataLink?.length > 0 && <UserList users={dataLink} />}
    </div>
  );
};

const UserList = ({ users }: { users: IUserReferred[] }) => {
  return (
    <div className="space-y-3 w-full pt-5">
      {users.map((user, index) => (
        <div key={index} className="p-3 border rounded-md shadow-sm bg-white">
          <p className="text-lg font-semibold text-primary">@{user.username}</p>
          <p className="text-gray-600">
            {user?.individual?.firstname} {user.individual?.lastname}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReferralLinks;

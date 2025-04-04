import { Button } from "@/components/UI/button";
import { ArrowLeft } from "lucide-react";
import useReferralStore from "@/providers/referral..providers";
import { ScrollArea } from "@/components/UI/scroll-area";
import { Separator } from "@/components/UI/separator";

export default function ReferralTerms() {
  const { terms, setTerms, setApply } = useReferralStore();

  return (
    <div className="w-full px-4 md:px-0">
      <div className="flex-row items-center justify-start">
        <Button
          onClick={() => {
            setTerms(false);
            setApply(true);
          }}
          className="px-0 hover:bg-transparent"
          variant={"ghost"}
        >
          <ArrowLeft />
          Previous
        </Button>
      </div>
      <ScrollArea className="h-96 w-full pt-5">
        <h2 className="text-lg md:text-xl font-bold text-green-700">
          Urban Referral Campaign - Terms and Conditions
        </h2>
        <Separator className="my-2" />

        <h3 className="text-base md:text-lg font-semibold mt-4">
          1. Introduction
        </h3>
        <p className="text-gray-700 text-sm md:text-base">
          These Terms and Conditions ("T&C") govern the Urban Referral Campaign
          ("Campaign"), which allows participants ("Referrers") to earn rewards
          by referring fleet owners or park owners to sign up and onboard their
          vehicles or parks on Urban. By participating in this Campaign, you
          agree to be bound by these T&C.
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          2. Eligibility
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            The Campaign is open to individuals who are at least 18 years old
            and legally eligible to participate.
          </li>
          <li>The Referrer must be a registered user of Urban.</li>
          <li>
            Employees, affiliates, and partners of Urban and their immediate
            family members are not eligible for this Campaign.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          3. How the Campaign Works
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>Each Referrer will receive a unique referral link.</li>
          <li>
            The Referrer must share their referral link with fleet owners or
            park owners.
          </li>
          <li>
            The referred fleet or park owner must successfully onboard their
            vehicle(s) or register their park on Urban.
          </li>
          <li>
            Once the referred party’s fleet or park goes live on Urban’s
            platform, the Referrer will be eligible for the reward.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          4. Referral Rewards
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            The Referrer is eligible to earn up to ₦50,000.00 per successful
            referral.
          </li>
          <li>
            In addition to the monetary reward, the Referrer will receive an
            Urban-branded hoodie.
          </li>
          <li>
            The reward amount is subject to the size of the fleet or park
            registered.
          </li>
          <li>
            Payments will be processed within a reasonable time after
            verification of the referral’s successful onboarding and activation.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          5. Reward Conditions
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            The referred party must be a new user and should not have an
            existing account with Urban.
          </li>
          <li>
            The fleet or park must remain active for a minimum period as
            determined by Urban.
          </li>
          <li>
            If a referred fleet or park is removed, inactive, or flagged for any
            violation of Urban’s policies before the reward is disbursed, the
            Referrer will not be eligible for the reward.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          6. Fraud and Misuse
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            Urban reserves the right to disqualify referrals suspected of
            fraudulent activities, including but not limited to:
          </li>
          <ul className="list-disc pl-6 md:pl-10 text-gray-700">
            <li>Creating fake accounts.</li>
            <li>Self-referrals.</li>
            <li>Misrepresenting Urban’s services to potential referrals.</li>
          </ul>
          <li>
            Any violation of these terms may lead to the forfeiture of rewards
            and possible suspension from future Urban campaigns.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          7. Modifications and Termination
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            Urban reserves the right to modify, suspend, or terminate the
            Campaign at any time without prior notice.
          </li>
          <li>
            Any changes will be effective immediately upon posting on Urban’s
            platform or notification to participants.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          8. Limitation of Liability
        </h3>
        <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
          <li>
            Urban is not responsible for any losses, damages, or delays arising
            from participation in this Campaign.
          </li>
          <li>
            By participating, the Referrer agrees to release Urban from any
            claims related to the Campaign.
          </li>
        </ul>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          9. Governing Law
        </h3>
        <p className="text-gray-700 text-sm md:text-base">
          These Terms and Conditions shall be governed and interpreted in
          accordance with the laws of Nigeria .
        </p>
        <h3 className="text-base md:text-lg font-semibold mt-4">
          10. Contact Information
        </h3>
        <p className="text-gray-700 text-sm md:text-base">
          For any inquiries regarding this Campaign, please contact Urban
          support at legal@urban.ng / +234 901 919 5291.
        </p>
        <p className="text-gray-700 font-semibold mt-4 text-sm md:text-base">
          By participating in the Urban Referral Campaign, you acknowledge that
          you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </ScrollArea>
    </div>
  );
}

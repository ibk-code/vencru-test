// ---------- import external dependencies -----------
import { useState } from "react";
import styled from "styled-components";

// ---------- import internal dependencies ------------
import Badge from "../../../components/BadgeComponent";
// ----- import assets -------
import { ReactComponent as EmailIcon } from "../../../assets/img/svgs/mail.svg";
import { ReactComponent as VisaIcon } from "../../../assets/img/svgs/visa.svg";
import { ReactComponent as MasterIcon } from "../../../assets/img/svgs/master.svg";
import { ReactComponent as ExportIcon } from "../../../assets/img/svgs/export.svg";
import { ReactComponent as DownIcon } from "../../../assets/img/svgs/down.svg";
import UserIcon from "../../../assets/img/avatar.png";

function Billing() {
  // ------- component state managers -------
  const [payment, setPayment] = useState("visa");

  const userImages = [
    UserIcon,
    UserIcon,
    UserIcon,
    UserIcon,
    UserIcon,
    UserIcon,
  ];

  const tableObj = {
    invoice: "Invoice #007 – Dec 2022",
    amount: "$10.00",
    date: "Dec 1, 2022",
    status: "paid",
    users: userImages.slice(0, Math.random() * (6 - 2) + 2),
  };

  const tableData = new Array(7).fill().map((ele) => {
    return tableObj;
  });

  return (
    <>
      {/* ------ payment method details ------ */}
      <FieldsWrapper className="mt-4">
        <div>
          <span className="block text-grey-900 text-lg font-medium">
            Payment method
          </span>
          <span className="text-grey-500 font-normal text-sm">
            Update your billing details and address.
          </span>
        </div>
      </FieldsWrapper>

      {/* ------ Contact email details ------ */}
      <FieldsWrapper>
        <div className="md:grid grid-cols-4 items-start">
          <div>
            <span className="block text-grey-900 text-lg font-medium">
              Contact email
            </span>
            <span className="text-grey-500 font-normal text-sm">
              Where should invoices be sent?
            </span>
          </div>
          <div className=" xs:mt4 md:mt-0 col-span-2">
            <div className="flex gap-2 items-start">
              <input
                name="contact-type"
                className="input-control"
                type="radio"
              />
              <div className="mt-1">
                <span className="block text-grey-700 text-sm font-medium">
                  Send to my account email
                </span>
                <span className="block text-grey-500 text-sm">
                  olivia@untitledui.com
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-start mt-2">
              <input
                name="contact-type"
                className="input-control"
                type="radio"
              />
              <div className="w-full mt-1">
                <span className="block text-grey-700 text-sm font-medium">
                  Send to an alternative email
                </span>
                <div className="w-full">
                  <span id="email" className="hidden">
                    Email
                  </span>
                  <div className="input-append no--border">
                    <EmailIcon />
                    <input
                      id="email"
                      aria-labelledby="email"
                      type="text"
                      className="input-control"
                      placeholder=""
                      value="olivia@untitledui.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FieldsWrapper>

      {/* ------ card details section ------- */}
      <div className="border-b-0">
        <div className="md:grid grid-cols-4 mt-4">
          <div>
            <span className="block text-grey-900 text-lg font-medium">
              Card details
            </span>
            <span className="text-grey-500 font-normal text-sm">
              Select default payment method.
            </span>
          </div>
          <div className="col-span-3">
            <PlanWrapper
              className="flex justify-between items-start mt-2"
              active={payment === "visa" ? true : false}
            >
              <div className="flex gap-4 items-start">
                <VisaIcon />
                <div>
                  <span className="block">Visa ending in 1234</span>
                  <span className="block text-sm">Expiry 06/2024</span>
                  <div className="mt-4 text-sm">
                    Set as default{" "}
                    <button className="bg-transparent text-purple-700 border-0 cursor-pointer">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <CustomCheckbox>
                  <input
                    name="payment-type"
                    className="input-control"
                    type="radio"
                    onChange={(e) => setPayment(e.target.value)}
                    value="visa"
                  />
                  <RadioButton className="custom-checkbox" />
                </CustomCheckbox>
              </div>
            </PlanWrapper>
            <PlanWrapper
              className="flex justify-between items-start mt-4"
              active={payment === "mastercard" ? true : false}
            >
              <div className="flex gap-4 items-start">
                <MasterIcon />
                <div>
                  <span className="block">Mastercard ending in 1234</span>
                  <span className="block text-sm">Expiry 06/2024</span>
                  <div className="mt-4 text-sm">
                    Set as default{" "}
                    <button className="bg-transparent text-purple-700 border-0 cursor-pointer">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <CustomCheckbox>
                  <input
                    name="payment-type"
                    className="input-control"
                    type="radio"
                    onChange={(e) => setPayment(e.target.value)}
                    value="mastercard"
                  />
                  <RadioButton className="custom-checkbox" />
                </CustomCheckbox>
              </div>
            </PlanWrapper>
            <button className="bg-transparent border-0 text-grey-500 mt-4 cursor-pointer">
              + Add new payment method
            </button>
          </div>
        </div>
      </div>

      {/* ------- billing and invoicing ------- */}
      <div className="mt-6">
        <div className="md:flex justify-between items-start">
          <div className="xs:mb-4">
            <span className="block text-grey-900 text-lg font-medium">
              Billing history
            </span>
          </div>
          <button className="btn btn-tran flex items-center">
            <ExportIcon /> Download all
          </button>
        </div>

        <div className="table-wrapper mt-4">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="flex gap-1 items-center">
                    <input type="checkbox" />
                    <span>Invoice</span>
                    <DownIcon />
                  </div>
                </th>
                <th>Amount</th>
                <th>
                  <div className="flex gap-1 items-center">
                    <span>Date</span>
                  </div>
                </th>
                <th>Status</th>
                <th>Users on plan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((ele, ind) => (
                <tr key={ind}>
                  <td>
                    <div className="flex gap-2 text-sm items-center">
                      <input type="checkbox" />
                      <span className="text-grey-900">{ele.invoice}</span>
                    </div>
                  </td>
                  <td>{ele.date}</td>
                  <td>
                    <Badge status={ele.status} />
                  </td>
                  <td>USD $10.00</td>
                  <td className="text-grey-900">
                    <div className="products-wrap">
                      {ele.users.map((user, ind) => (
                        <div>
                          <img src={user} alt="User " />
                        </div>
                      ))}
                      {ele.users.length > 4 && (
                        <div className="flex flex-col justify-center items-center text-grey-600 bg-grey-50">
                          +{userImages.length - ele.users.length}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn bg-transparent flex items-center justify-end cursor-pointer"
                      // onClick={() => setOpen(true)}
                    >
                      <ExportIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Billing;

const FieldsWrapper = styled.div`
  padding: 1rem 0;
  border-bottom: ${(props) =>
    props.noborder ? "0" : "1px solid var(--grey200)"};
  // display: grid;
  grid-template-columns: 40% 60%;
  align-items: flex-start;
`;

const PlanWrapper = styled.div`
  background-color: ${(props) =>
    props.active ? "var(--purple50)" : "var(--white100)"};
  border: ${(props) =>
    props.active ? "1px solid var(--purple300)" : "1px solid var(--grey200)"};
  padding: 1rem;
  color: ${(props) => (props.active ? "var(--purple600)" : "var(--grey500)")};
  border-radius: 6px;

  & span:first-child {
    color: ${(props) => (props.active ? "var(--purple800)" : "var(--grey700)")};
  }
`;

const CustomCheckbox = styled.div`
  position: relative;

  & .input-control {
    position: absolute;
    left: -2px;
    top: -5px;
    z-index: 10;
    opacity: 0;

    &:checked + .custom-checkbox {
      // box-shadow: 0px 0px 0px 4px var(--purple100);
      border: 1px solid var(--purple600);
      background: var(--purple600);
      &:before {
        display: block;
      }
    }
  }
`;

const RadioButton = styled.div`
  border: 1px solid var(--grey300);
  background: var(--white100);
  height: 20px;
  width: 20px;
  border-radius: 50px;
  position: relative;

  &:before {
    content: " ";
    background-image: url(/assets/img/svgs/check.svg);
    background-size: contain;
    height: 12px;
    width: 12px;
    display: none;
    margin-top: 0.2rem;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    position: relative;
  }
`;

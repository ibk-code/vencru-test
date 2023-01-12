// ---------- import external dependencies ----------
import styled from "styled-components";

// --------- import internal dependencies ----------
// ----- import assets -------
import { ReactComponent as CheckedIcon } from "../../assets/img/svgs/checked.svg";

function Badge({ status }) {
  const statusList = {
    paid: {
      bg: "bg-green-50",
      icon: CheckedIcon,
      textColor: "text-green-700",
    },
  };

  const { [status]: activeStatus } = statusList;
  return (
    <BadgeWrapper className={`${activeStatus.bg}`}>
      <activeStatus.icon />
      <span className={`capitalize ${activeStatus.textColor}`}>{status}</span>
    </BadgeWrapper>
  );
}

export default Badge;

const BadgeWrapper = styled.div`
  min-width: 55px;
  min-height: 35px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.bg-green-50 {
    svg {
      path {
        stroke: var(--green500);
      }
    }
  }

  &.bg-red-50 {
    svg {
      path {
        stroke: var(--red700);
      }
    }
  }
`;

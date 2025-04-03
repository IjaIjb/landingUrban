import { format } from "date-fns";

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
export const transformDate = (dateobj: any) => {
  const dateObject = new Date(dateobj);
  const formattedDate = format(dateObject, "dd MMM yyyy");
  return formattedDate;
};
export const formatDate = (dateobj: any) => {
  const dateObject = new Date(dateobj);
  const formattedDate = format(dateObject, "yyyy-MM-dd");
  return formattedDate;
};
export const getRenderValue = (selected: any, data?: any) => {
  if (selected.length === 0) {
    return `All`;
  }
  if (selected.length <= 2) {
    return selected.join(", ");
  }
  if (selected.length == data?.length) {
    return "All";
  } else {
    return `${selected.slice(0, 2).join(", ")} + ${
      selected.length - 2
    } more items`;
  }
};
export const getRenderSingleValue = (selected: any, type?: string) => {
  if (selected === "") {
    return `Select ${type?.toLocaleLowerCase()}`;
  }
  if (selected !== null || selected !== "") {
    return selected;
  }
};

export const getCurrentDate = () => {
  const options = { hour12: true };
  const today = new Date();
  const time = new Date().toLocaleTimeString("en-US", options);
  const date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
  const obj = {
    date,
    time,
  };
  return obj;
};

export const handleSearchChange = (
  event: any,
  setFunction: Function,
  category: string
) => {
  // setFunction(event.target.value);
  setFunction((prevState: any) => {
    return {
      ...prevState,
      [category]: event.target.value,
    };
  });
};
export const handleMultiSelectChange = (
  event: any,
  selectedOptions: any[],
  setSelectedOptions: Function,
  options: any[],
  category: string
) => {
  const { value } = event.target;
  console.log("called");
  if (value.includes("All")) {
    console.log("include all");
    if (selectedOptions.length === options.length) {
      setSelectedOptions((prevState: any) => {
        return {
          ...prevState,
          [category]: [],
        };
      });
    } else {
      setSelectedOptions((prevState: any) => {
        return {
          ...prevState,
          [category]: options.map((option: any) => option.name),
        };
      });
    }
  } else {
    console.log("not all");
    setSelectedOptions((prevState: any) => {
      return {
        ...prevState,
        [category]: value,
      };
    });
  }
};

export const randomColor = () => {
  return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
};

export const handleSingleSelectChange = (
  event: any,
  setSelectedValue: Function,
  options: any[]
) => {
  const { value } = event.target;
  const isValidValue = options.some((option) => option.id === value);
  if (isValidValue) {
    setSelectedValue(value);
  }
};

export const numberWithCommas = (x: any) => {
  x = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
};

export const formattedNumber = (value: number | any) => {
  value = parseInt(value);
  return value.toLocaleString("en-US");
};
export const generateColors = (count: number) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(
      `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.5)`
    );
  }
  return colors;
};

export const getCurrentMonthDates = () => {
  const today = new Date();
  // const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
  let startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const endDate = today;
  const formattedStartDate = formatDate(yesterday);
  const formattedEndDate = formatDate(endDate);

  return {
    start_date: formattedStartDate,
    end_date: formattedEndDate,
  };
};

export const diffBetweenDates = (firstDate: any, secondDate: any) => {
  var startDate = new Date(firstDate);
  var endDate = new Date(secondDate);

  var timeDifference = endDate.getTime() - startDate.getTime();
  var daysDifference = timeDifference / (1000 * 3600 * 24);

  return daysDifference;
};

// export const handleAllCheckboxChange = (
//     event: any,
//     setFunction: Function,
//     data: any
// ) => {
//     event.preventDefault();
//     const isChecked = event.target.checked;
//     setFunction(isChecked ? data.map((option: any) => option.id) : []);
// };

// export const handleMultiSelectChange = (
//     event: any,
//     selectedOptions: any,
//     setSelectedOptions: Function,
//     options: any
// ) => {
//     const { value } = event.target;
//     if (value.includes("All")) {
//         if (selectedOptions.length === options.length) {
//             setSelectedOptions([]);
//         } else {
//             setSelectedOptions(options.map((option: any) => option.id));
//         }
//     } else {
//         setSelectedOptions(value);
//     }
// };

export function secondsToHoursAndMinutes(seconds: number) {
  if (typeof seconds !== "number" || seconds < 0) {
    throw new Error("Input must be a non-negative number");
  }
  let result;
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  if (hours < 1) {
    result = 0;
  } else {
    result = `${hours}:${minutes}`;
  }
  return result;
}

export function shuffleArray(array: any[]) {
  let currentIndex = array.length; // Start at the end of the array
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const getStatusClass = (statusText: string) => {
  switch (statusText) {
    case (statusText = "deactivated"):
      return "#969696";

    case (statusText = "active"):
      return "green";

    case (statusText = "online"):
      return "#349A67";

    case (statusText = "completed"):
      return "green";

    case (statusText = "received"):
      return "cyan";
    case (statusText = "reconciled"):
      return "green";

    case (statusText = "trip ended"):
      return "blue";

    case (statusText = "successful"):
      return "green";

    case (statusText = "verified"):
      return "green";
    case (statusText = "disabled"):
      return "red";

    case (statusText = "failed"):
      return "red";

    case (statusText = "offboard"):
      return "grey";
    case (statusText = "transfer"):
      return "blue";
    case (statusText = "inactive"):
      return "red";
    case (statusText = "Off-boarded"):
      return "red";
    case (statusText = "rto"):
      return "red";
    case (statusText = "unverified"):
      return "grey";
    case (statusText = "drafted"):
      return "grey";
    case (statusText = "assigned"):
      return "blue";
    case (statusText = "pending"):
      return "grey";
    case (statusText = "dispatched"):
      return "cyan";
    case (statusText = "in-delivery"):
      return "yellow";

    case (statusText = "intransit"):
      return "yellow";
    case (statusText = "in delivery"):
      return "yellow";

    case (statusText = "lost"):
      return "yellow";
    case (statusText = "in progress"):
      return "yellow";

    case (statusText = "canceled"):
      return "lightred";
    case (statusText = "cancelled"):
      return "lightred";
    case (statusText = "accepted"):
      return "lightgreen";
    case (statusText = "rejected"):
      return "red";
    case (statusText = "stolen"):
      return "red";
    case (statusText = "delivered"):
      return "cyan";

    case (statusText = "partial reconcilation"):
      return "cyan";

    case (statusText = "partial"):
      return "cyan";
    default:
      return statusText;
  }
};

export const getStatusClassHex = (statusText: string) => {
  switch (statusText) {
    case (statusText = "active"):
      return "#349A67";

    case (statusText = "online"):
      return "#349A67";

    case (statusText = "received"):
      return "#55BABF";

    case (statusText = "reconciled"):
      return "green";

    case (statusText = "trip_ended"):
      return "green";

    case (statusText = "successful"):
      return "green";

    case (statusText = "verified"):
      return "green";
    case (statusText = "disabled"):
      return "red";

    case (statusText = "failed"):
      return "red";

    case (statusText = "offboard"):
      return "grey";
    case (statusText = "transfer"):
      return "blue";
    case (statusText = "inactive"):
      return "red";
    case (statusText = "Off-boarded"):
      return "red";
    case (statusText = "rto"):
      return "red";
    case (statusText = "unverified"):
      return "grey";
    case (statusText = "drafted"):
      return "grey";
    case (statusText = "assigned"):
      return "blue";
    case (statusText = "pending"):
      return "grey";
    case (statusText = "dispatched"):
      return "green";
    case (statusText = "in-delivery"):
      return "yellow";

    case (statusText = "intransit"):
      return "yellow";
    case (statusText = "in delivery"):
      return "yellow";

    case (statusText = "lost"):
      return "#FAAB48";
    case (statusText = "in progress"):
      return "yellow";

    case (statusText = "canceled"):
      return "lightred";
    case (statusText = "cancelled"):
      return "lightred";
    case (statusText = "accepted"):
      return "lightgreen";
    case (statusText = "rejected"):
      return "red";
    case (statusText = "stolen"):
      return "red";
    case (statusText = "delivered"):
      return "cyan";

    case (statusText = "partial reconcilation"):
      return "cyan";

    case (statusText = "partial"):
      return "cyan";
    default:
      return statusText;
  }
};

export const timeForUser = (time: any) => {
  const userTimezoneOffset = new Date().getTimezoneOffset() * -1;
  const utcTime = time;
  const date = new Date(utcTime);
  const localTime = new Date(date.getTime() + userTimezoneOffset * 60000);
  const newdate = new Date(localTime);

  // Format the date without the timezone
  const options: any = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedDate = newdate
    .toLocaleString("en-US", options)
    .replace(/,\s*\w*$/, "");

  return formattedDate;
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}

export function isString(value: any) {
  return typeof value === "string";
}

export const convetToISO = (value: any) => {
  const dateString = value;
  const [day, month, year]: any = dateString.split("/");
  const date = new Date(year, month - 1, day);
  const isoDate = date.toISOString().split("T")[0];
  return isoDate;
};

export function calculateVAT(amount: number, vatRate = 7.5) {
  if (amount <= 0) {
    throw new Error("Amount should be greater than 0");
  }

  // Calculate VAT
  const vat = (amount * vatRate) / 100;

  // Calculate total price
  const total = amount + vat;

  return {
    vat: vat.toFixed(2), // VAT amount
    total: total.toFixed(2), // Total price including VAT
  };
}

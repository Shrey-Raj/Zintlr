import React from "react";
import { Table, Button , Space} from "antd";

const columns = [
  {
    title: "Consumer Name",
    dataIndex: "consumerName",
  },
  {
    title: "Assets",
    dataIndex: "assets",
    render: (assets, record) => (
      <>
        <div className="text-xs mb-1">{record.text}</div>
        <div className="flex space-x-2">
          {assets.map((asset, index) => (
            <Button
              key={index}
              type="default"
              className="text-xs px-2"
              style={{ background: asset.color }}
            >
              {asset.label}
            </Button>
          ))}
        </div>
      </>
    ),
    filters: [
      {
        text: "42.3gm",
        value: "42.3gm",
      },
      {
        text: "54.2gm",
        value: "54.2gm",
      },
      {
        text: "76.2gm",
        value: "76.2gm",
      },
    ],
    onFilter: (value, record) =>
      record.assets.some((asset) =>
        asset.label.toLowerCase().includes(value.toLowerCase())
      ),
  },
  {
    title: "Revenue",
    dataIndex: "revenue",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.revenue - b.revenue,
    filters: [
      {
        text: "Pending",
        value: "pending",
      },
      {
        text: "In Progress",
        value: "inProgress",
      },
      {
        text: "Done",
        value: "done",
      },
      {
        text: "Rejected",
        value: "rejected",
      },
    ],
  },
  {
    title: "KYC Status",
    dataIndex: "kycStatus",
    render: (kycStatus) => (
      <Button
        type="default"
        className="text-xs px-2"
        style={{ background: getButtonColor(kycStatus) }}
      >
        {kycStatus}
      </Button>
    ),
    filters: [
      {
        text: "Pending",
        value: "Pending",
      },
      {
        text: "In Progress",
        value: "In Progress",
      },
      {
        text: "Done",
        value: "Done",
      },
      {
        text: "Rejected",
        value: "Rejected",
      },
    ],
    onFilter: (value, record) => record.kycStatus.includes(value),
  },
  {
    title: "Facilitator",
    dataIndex: "facilitator",
    render: (facilitator) => (
      <div className="text-xs">
        {facilitator.map((item, index) => (
          <div key={index} className="flex items-center mb-1">
            <span className="font-semibold">{item.role}</span>
            <span className="mx-1">&rarr;</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Zone",
    dataIndex: "zone",
    filters: [
      {
        text: "East",
        value: "East",
      },
      {
        text: "West",
        value: "West",
      },
      {
        text: "South",
        value: "South",
      },
      {
        text: "North",
        value: "North",
      },
    ],
    onFilter: (value, record) => record.zone.indexOf(value) === 0,
  },
  {
    title: 'Account Type',
    dataIndex: 'accountType',
    filters: [
      {
        text: 'Business',
        value: 'Business',
      },
      {
        text: 'Pay and Use (Major)',
        value: 'Pay and Use (Major)',
      },
      {
        text: 'Pay and Use (Minor)',
        value: 'Pay and Use (Minor)',
      },
      {
        text: 'Salary Earner',
        value: 'Salary Earner',
      },
      {
        text: 'Earner',
        value: 'Earner',
      },
    ],
    onFilter: (value, record) => record.accountType.indexOf(value) === 0,
    render: (text, record) => (
        <Button type="default" style={{background:getAccountTypeColor(text)}} 
        >
          {text}
        </Button>
    )
  },
  {
    title : "TRA",
    dataIndex : "tra",
    render:(tra)=>(
        <span className="font-semibold">{tra}</span>
    )
  }
];

const getButtonColor = (kycStatus) => {
  switch (kycStatus) {
    case "Pending":
      return "lightblue";
    case "In Progress":
      return "lightcoral";
    case "Done":
      return "lightgreen";
    case "Rejected":
      return "lightsalmon";
    default:
      return "transparent";
  }
};

const getAccountTypeColor = (accountType) => {
    switch (accountType) {
      case 'Business':
        return 'lightblue';
      case 'Pay and Use (Major)':
        return 'lightcoral';
      case 'Pay and Use (Minor)':
        return 'lightgreen';
      case 'Salary Earner':
        return 'lightyellow';
      case 'Earner':
        return 'lightpink';
      default:
        return 'lightgray'; // Default color if account type doesn't match
    }
  };

const data = [
  {
    key: "1",
    consumerName: "Shrey",
    assets: [
      { label: "42.3gm", color: "lightblue" },
      { label: "54.2gm", color: "lightcoral" },
      { label: "76.2gm", color: "lightgreen" },
    ],
    text: " Text 1",
    revenue: 32,
    kycStatus: "Pending",
    facilitator: [
      { role: "B2B Field Executive", name: "John Doe" },
      { role: "Associate", name: "Jane Doe" },
    ],
    zone: "West",
    accountType: "Earner",
    tra:"8726177334@tru"
  },
  {
    key: "2",
    consumerName: "Shrey",
    assets: [
      { label: "29.3gm", color: "lightblue" },
      { label: "23.2gm", color: "lightcoral" },
      { label: "12.2gm", color: "lightgreen" },
    ],
    text: " Text 2",
    revenue: 42,
    kycStatus: "In Progress",
    facilitator: [
      { role: "B2B Field Executive", name: "John Doe" },
      { role: "Associate", name: "Jane Doe" },
    ],
    zone: "East",
    accountType: "Pay and Use (Major)",
    tra:"8726177334@tru"
  },
  {
    key: "3",
    consumerName: "Shrey",
    assets: [
      { label: "62.3gm", color: "lightblue" },
      { label: "74.2gm", color: "lightcoral" },
      { label: "68.2gm", color: "lightgreen" },
    ],
    text: " Text 3",
    revenue: 32,
    kycStatus: "Done",
    facilitator: [
      { role: "B2B Field Executive", name: "John Doe" },
      { role: "Associate", name: "Jane Doe" },
    ],
    zone: "South",
    accountType: "Pay and Use (Minor)",
    tra:"8726177334@tru"
  },
  {
    key: "4",
    consumerName: "Shrey",
    assets: [
      { label: "23.3gm", color: "lightblue" },
      { label: "44.2gm", color: "lightcoral" },
      { label: "23.2gm", color: "lightgreen" },
    ],
    text: " Text 4",
    revenue: 32,
    kycStatus: "Rejected",
    facilitator: [
      { role: "B2B Field Executive", name: "John Doe" },
      { role: "Associate", name: "Jane Doe" },
    ],
    zone: "North",
    accountType: "Business",
    tra:"8726177334@tru"
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const App = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} 
  style={{overflowX:"scroll"}}
   />
);

export default App;

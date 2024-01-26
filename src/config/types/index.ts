import { Address } from "wagmi";

export type SelectOptions = {
  label: string;
  value: number;
  icon: any;
  address: Address;
};

export enum DeployStatus {
  PENDING = "PENDING",
  DEPLOYED = "DEPLOYED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  LOW_FEES = "LOW_FEES",
  QUERIED = "QUERIED",
  WAITING_FOR_CONFIRMATION = "WAITING_FOR_CONFIRMATION",
}

export enum TokenBridgeStatus {
  QUERIED = "QUERIED",
  BRIDGE_INITIATED = "BRIDGE_INITIATED",
  IN_QUEUE = "IN_QUEUE",
  LOW_FEES = "LOW_FEES",
  BRIDGE_COMPLETED = "BRIDGE_COMPLETED",
  BRIDGE_ERROR = "BRIDGE_ERROR",
}

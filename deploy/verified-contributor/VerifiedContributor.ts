import { Deployer, DeployInfo } from "../../web3webdeploy/types";

export interface VerifiedContributorDeploymentSettings
  extends Omit<DeployInfo, "contract" | "args"> {}

export async function deployVerifiedContributor(
  deployer: Deployer,
  settings: VerifiedContributorDeploymentSettings
) {
  return await deployer
    .deploy({
      id: "VerifiedContributor",
      contract: "VerifiedContributor",
      ...settings,
    })
    .then((deployment) => deployment.address);
}

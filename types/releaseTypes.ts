export interface ReleaseInfo {
  version: string;
  releaseDate: string;
}

export interface ReleaseResponse {
  tag_name: string;
  published_at: string;
}

export interface Releases {
  windows: ReleaseInfo;
  mac: ReleaseInfo;
  linux: ReleaseInfo;
}

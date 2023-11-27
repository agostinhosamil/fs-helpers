type DirPath = string

type GetDirectoryFilesListOptions = {
  recursive?: boolean,
  includeSubdirectories?: boolean,
  directoryPathsMap?: (dirPath: DirPath) => DirPath
}

export function getDirectoryFilesList(dirPath: DirPath, options?: GetDirectoryFilesListOptions): DirPath[]

type Path = string | string[]

type CopyFileToProps = {
  filePath: Path,
  dest?: Path,
  destDir?: Path,
  destName?: Path
}

export function getAbsoluteFileDestinationPath(options: CopyFileToProps): string

export function copyFileTo(props: CopyFileToProps): boolean

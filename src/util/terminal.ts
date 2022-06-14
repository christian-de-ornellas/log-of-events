const terminal = {
  write: (text: string): unknown => {
    return process.stdout.write(text)
  },
  input: (callback: (data: Buffer) => void): unknown => {
    return process.stdin.on('data', callback)
  },
  exit: (): void => process.exit(),
}

export default terminal

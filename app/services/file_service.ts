import File from '#models/file'

export default class FileService {
  async test() {
    const files = await File.all()
    console.log('testing')

    return files
  }
}

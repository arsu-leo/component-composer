class Bus
{
  constructor(busChannelFactory, channels)
  {
    this.busChannelFactory = busChannelFactory
    this.channels          = channels
  }

  addChannel(id)
  {
    const channel = this.busChannelFactory.create()
    this.channels.add(id, channel)
  }

  deleteChannel(id)
  {
    this.channels.remove(id)
  }

  getChannel(id)
  {
    return this.channels.get(id)
  }

  publish(channelId, actionId, source, type, payload)
  {
    this.getChannel(channelId).publish(actionId, source, type, payload)
  }

  subscribe(channelId, actionId, callback)
  {
    return this.getChannel(channelId).subscribe(actionId, callback)
  }

  subscribeOnce(channelId, actionId, callback)
  {
    this.getChannel(channelId).subscribeOnce(actionId, callback)
  }

  subscribeAll(channelId, callback)
  {
    this.getChannel(channelId).subscribeAll(callback)
  }

  unsubscribe(channelId, actionId, callback)
  {
    this.getChannel(channelId).unsubscribe(actionId, callback)
  }

  unsubscribeAll(channelId, actionId)
  {
    this.getChannel(channelId).unsubscribeAll(actionId)
  }

  reset(channelId)
  {
    this.getChannel(channelId).reset()
  }
}

module.exports = Bus
